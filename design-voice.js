// Designs voice candidates from a text prompt via ElevenLabs Voice Design API.
// Saves MP3 previews to public/audio/voice-design/ and metadata to voice-design.json
// Run: node design-voice.js [prompt-key]
//   prompt-key: 'warm-coach' (default), 'energetic', 'thoughtful'
// After listening, pick a preview; run promote-voice.js with its generated_voice_id.

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

const PROMPTS = {
  'warm-coach': 'A warm, professional Indian-English voice, mid-40s, like an experienced agile coach welcoming someone to a course. Conversational and encouraging, with a subtle smile in the voice. Slight Mumbai/Delhi accent. Measured pace with light moments of warmth and gentle humor. Sounds like a senior practitioner who has seen a lot and shares wisdom approachably.',
  'energetic': 'An energetic Indian-English speaker, late-30s, motivational coach style, slightly upbeat. Clear articulation, modern and urban. Sounds like a confident TEDx speaker who loves teaching.',
  'thoughtful': 'A calm, thoughtful Indian-English voice, mid-40s, narrator quality. Articulate, slightly philosophical, like an audiobook narrator for a leadership book. Warm but measured, with depth and gravitas.',
};

const SAMPLE_TEXT = `Welcome. You're about to begin something that will genuinely change how you work. This is the Microsoft Co-pilot for AI-Enabled Scrum Masters course — twenty-seven modules across six levels, built around one central idea: that the best Scrum Masters in the next decade won't be the ones who know the Scrum Guide most thoroughly. They'll be the ones who can think clearly, move fast, and use intelligent tools to amplify their human judgment.`;

function design(voiceDescription, text) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      voice_description: voiceDescription,
      text,
      model_id: 'eleven_multilingual_ttv_v2',
      loudness: 0.5,
      guidance_scale: 5,
    });
    const req = https.request({
      hostname: 'api.elevenlabs.io',
      path: '/v1/text-to-voice/design',
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

async function main() {
  const promptKey = process.argv[2] || 'warm-coach';
  if (!PROMPTS[promptKey]) {
    console.error(`Unknown prompt key '${promptKey}'. Choose from: ${Object.keys(PROMPTS).join(', ')}`);
    process.exit(1);
  }
  const description = PROMPTS[promptKey];

  const outDir = path.join(__dirname, 'public', 'audio', 'voice-design');
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`\nPrompt key: ${promptKey}`);
  console.log(`Prompt: ${description}\n`);
  console.log('Calling /v1/text-to-voice/design ...');

  const result = await design(description, SAMPLE_TEXT);
  const previews = result.previews || [];
  console.log(`Got ${previews.length} preview(s)\n`);

  const metaPath = path.join(outDir, 'voice-design.json');
  const metaExisting = fs.existsSync(metaPath) ? JSON.parse(fs.readFileSync(metaPath, 'utf8')) : { runs: [] };
  const run = {
    timestamp: new Date().toISOString(),
    promptKey,
    description,
    previews: [],
  };

  previews.forEach((p, i) => {
    const num = i + 1;
    const filename = `${promptKey}-preview-${num}.mp3`;
    const filepath = path.join(outDir, filename);
    fs.writeFileSync(filepath, Buffer.from(p.audio_base_64, 'base64'));
    run.previews.push({
      number: num,
      file: filename,
      generated_voice_id: p.generated_voice_id,
      duration_secs: p.duration_secs,
      language: p.language,
    });
    console.log(`  Preview ${num} → ${filename} (${p.duration_secs?.toFixed?.(1) ?? '?'}s)`);
    console.log(`    generated_voice_id: ${p.generated_voice_id}`);
  });

  metaExisting.runs.push(run);
  fs.writeFileSync(metaPath, JSON.stringify(metaExisting, null, 2));

  console.log(`\nMetadata saved → public/audio/voice-design/voice-design.json`);
  console.log(`\nListen to the previews and tell me which one you like.`);
  console.log(`To save the chosen voice, run: node promote-voice.js <generated_voice_id> "<voice_name>"`);
}

main().catch(err => { console.error(err.message); process.exit(1); });
