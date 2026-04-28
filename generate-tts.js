// Converts public/audio-scripts/*.txt → public/audio/*.mp3 via ElevenLabs
// Run: node generate-tts.js
// Resumable: skips files that already exist in public/audio/
const fs = require('fs');
const path = require('path');
const https = require('https');

// Load .env if present (no external deps)
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, 'utf8').split('\n').forEach(line => {
    const [k, ...v] = line.trim().split('=');
    if (k && v.length && !process.env[k]) process.env[k] = v.join('=');
  });
}

const VOICE_ALICE = 'Xb7hH8MSUJpSbSDYk0k2';        // Alice — module reflections
const VOICE_AUTHORITY = 'Qc0h5B5Mqs8oaH4sFZ9X';    // Attenborough-style — module primers
const VOICE_USER = '';                              // Sanjay — course welcome/completion (TBD)
const MODEL_ID = 'eleven_multilingual_v2';

function pickVoice(name) {
  if ((name === 'course-welcome' || name === 'course-completion') && VOICE_USER) return VOICE_USER;
  if (name.endsWith('-primer')) return VOICE_AUTHORITY;
  return VOICE_ALICE;
}
const API_KEY = process.env.ELEVENLABS_API_KEY;
const SCRIPTS_DIR = path.join(__dirname, 'public', 'audio-scripts');
const AUDIO_DIR = path.join(__dirname, 'public', 'audio');

if (!API_KEY) {
  console.error('Error: ELEVENLABS_API_KEY not set');
  process.exit(1);
}

fs.mkdirSync(AUDIO_DIR, { recursive: true });

function tts(text, voiceId) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: { stability: 0.5, similarity_boost: 0.75 }
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${voiceId}`,
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg',
        'Content-Length': Buffer.byteLength(body)
      }
    }, (res) => {
      if (res.statusCode !== 200) {
        let err = '';
        res.on('data', d => err += d);
        res.on('end', () => reject(new Error(`API ${res.statusCode}: ${err}`)));
        return;
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

const delay = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  const scripts = fs.readdirSync(SCRIPTS_DIR)
    .filter(f => f.endsWith('.txt'))
    .sort();

  console.log(`Found ${scripts.length} scripts\n`);
  let generated = 0, skipped = 0;

  for (const scriptFile of scripts) {
    const name = scriptFile.replace('.txt', '');
    const outFile = path.join(AUDIO_DIR, `${name}.mp3`);

    if (fs.existsSync(outFile)) {
      console.log(`  SKIP  ${name}`);
      skipped++;
      continue;
    }

    const text = fs.readFileSync(path.join(SCRIPTS_DIR, scriptFile), 'utf8').trim();
    process.stdout.write(`  GEN   ${name} (${text.length} chars) ... `);

    const buf = await tts(text, pickVoice(name));
    fs.writeFileSync(outFile, buf);
    console.log(`${(buf.length / 1024).toFixed(0)} KB`);
    generated++;

    await delay(400);
  }

  console.log(`\nDone. ${generated} generated, ${skipped} skipped.`);
  console.log(`Audio files saved to public/audio/`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
