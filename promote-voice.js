// Promotes a designed voice preview to a saved voice in your ElevenLabs library.
// Run: node promote-voice.js <generated_voice_id> "<voice_name>"
//   <generated_voice_id> — from public/audio/voice-design/voice-design.json
//   "<voice_name>" — what to call the saved voice (e.g. "Sanjay")

const fs = require('fs');
const path = require('path');
const https = require('https');

const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, 'utf8').split('\n').forEach(line => {
    const [k, ...v] = line.trim().split('=');
    if (k && v.length && !process.env[k]) process.env[k] = v.join('=');
  });
}

const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) { console.error('Error: ELEVENLABS_API_KEY not set'); process.exit(1); }

const generatedVoiceId = process.argv[2];
const voiceName = process.argv[3];
if (!generatedVoiceId || !voiceName) {
  console.error('Usage: node promote-voice.js <generated_voice_id> "<voice_name>"');
  process.exit(1);
}

const metaPath = path.join(__dirname, 'public', 'audio', 'voice-design', 'voice-design.json');
const meta = fs.existsSync(metaPath) ? JSON.parse(fs.readFileSync(metaPath, 'utf8')) : { runs: [] };
let description = '';
let played = [];
for (const run of meta.runs) {
  for (const p of run.previews) {
    if (p.generated_voice_id === generatedVoiceId) description = run.description;
    else played.push(p.generated_voice_id);
  }
}
if (!description) {
  console.error(`Could not find generated_voice_id ${generatedVoiceId} in voice-design.json`);
  process.exit(1);
}

function create() {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      voice_name: voiceName,
      voice_description: description,
      generated_voice_id: generatedVoiceId,
      played_not_selected_voice_ids: played,
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: '/v1/text-to-voice',
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        if (res.statusCode !== 200) return reject(new Error(`API ${res.statusCode}: ${raw}`));
        try { resolve(JSON.parse(raw)); } catch (e) { reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

create()
  .then(v => {
    console.log(`\nVoice saved.`);
    console.log(`  voice_id:   ${v.voice_id}`);
    console.log(`  name:       ${v.name}`);
    console.log(`  category:   ${v.category}`);
    console.log(`\nNext: update VOICE_USER in generate-tts.js to '${v.voice_id}', delete public/audio/course-welcome.mp3 + course-completion.mp3, then run node generate-tts.js`);
  })
  .catch(err => { console.error(err.message); process.exit(1); });
