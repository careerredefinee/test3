// Centralized prompt builders for AI tools
// Professionalized: numbered sections + rounded bullet points (•)

export const buildCareerPrompt = (data: {
  name?: string;
  skills?: string;
  interests?: string;
  education?: string;
  experience?: string;
  targetRole?: string;
  industries?: string;
  location?: string;
}) => {
  return (
    `You are an expert career coach. Create a professional, step-by-step career plan.` +
    `\n**Instructions:**` +
    `\n- Use numbered sections for main topics.` +
    `\n- Use rounded bullet points (•) for sub-items.` +
    `\n- Plain text output.` +
    `\n\nInputs:` +
    `\nName: ${data.name || '-'}\nCurrent skills: ${data.skills || '-'}\nInterests: ${data.interests || '-'}\nEducation: ${data.education || '-'}\nExperience: ${data.experience || '-'}\nTarget role: ${data.targetRole || '-'}\nIndustries: ${data.industries || '-'}\nLocation: ${data.location || '-'}\n` +
    `\n\nOutput sections:` +
    `\n1. Summary fit` +
    `\n   •` +
    `\n2. Suggested roles` +
    `\n   •` +
    `\n3. Learning roadmap (weeks)` +
    `\n   •` +
    `\n4. Projects/Portfolio` +
    `\n   •` +
    `\n5. Networking plan` +
    `\n   •` +
    `\n6. Job search strategy` +
    `\n   •` +
    `\n7. 30/60/90-day plan` +
    `\n   •`
  );
};

export const buildInterviewPrompt = (data: {
  role?: string;
  jobDescription?: string;
}) => {
  return (
    `Act as a professional interviewer for the role: ${data.role || '-'}.` +
    `\n**Instructions:**` +
    `\n- Ask 5 questions sequentially.` +
    `\n- Provide model answer hints and evaluation criteria.` +
    `\n- Use numbered sections + rounded bullet points (•).` +
    `\n- Plain text output.` +
    `\nJob description (if any):\n${data.jobDescription || '-'}`
  );
};

export const buildSkillGapPrompt = (data: {
  targetRole?: string;
  currentSkills?: string;
}) => {
  return (
    `Analyze skill gaps for role: ${data.targetRole || '-'}.` +
    `\nCurrent skills: ${data.currentSkills || '-'}.` +
    `\n**Instructions:**` +
    `\n- Numbered sections + rounded bullet points (•).` +
    `\n- Plain text output.` +
    `\nOutput:` +
    `\n1. Required skills (core/advanced)` +
    `\n   •` +
    `\n2. Missing skills` +
    `\n   •` +
    `\n3. Learning resources (links acceptable)` +
    `\n   •` +
    `\n4. 4-week learning plan with outcomes` +
    `\n   •`
  );
};

export const buildSalaryPrompt = (data: {
  role?: string;
  location?: string;
  experience?: string;
}) => {
  return (
    `Provide professional salary research and negotiation strategy.` +
    `\nRole: ${data.role || '-'}\nLocation: ${data.location || '-'}\nExperience: ${data.experience || '-'}` +
    `\n**Instructions:**` +
    `\n- Numbered sections + rounded bullet points (•).` +
    `\n- Plain text output.` +
    `\nOutput:` +
    `\n1. Typical salary ranges` +
    `\n   •` +
    `\n2. Factors impacting compensation` +
    `\n   •` +
    `\n3. Negotiation scripts and tips` +
    `\n   •` +
    `\n4. Benefits, equity, and perks checklist` +
    `\n   •`
  );
};

export const buildResumeAnalysisPrompt = (extractedText: string) => {
  return (
    `You are an ATS and career coach. Analyze the following resume professionally.` +
    `\n**Instructions:**` +
    `\n- Numbered sections + rounded bullet points (•).` +
    `\n- Plain text output.` +
    `\nOutput:` +
    `\n1. Summary assessment` +
    `\n   •` +
    `\n2. Strengths` +
    `\n   •` +
    `\n3. Gaps with suggested improvements` +
    `\n   •` +
    `\n4. Keyword optimization tips` +
    `\n   •` +
    `\n5. 5 tailored bullet points (STAR style)` +
    `\n   •` +
    `\n\nRESUME TEXT:\n${extractedText}`
  );
};

export const buildMentorPrompt = (question: string) => {
  return (
    `You are a concise, professional AI career mentor.` +
    `\n**Instructions:**` +
    `\n- Numbered sections + rounded bullet points (•).` +
    `\n- Provide actionable step-by-step advice.` +
    `\n- Plain text output.` +
    `\nQuestion: ${question}`
  );
};
