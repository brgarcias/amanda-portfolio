interface LanguageSkill {
  label: string;
  value: string;
}

interface LanguageSkillsData {
  title: string;
  items: LanguageSkill[];
}

const languageSkillsData: LanguageSkillsData = {
  title: 'Language Skills',
  items: [
    {
      label: 'English',
      value: '95',
    },
    {
      label: 'French',
      value: '85',
    },
    {
      label: 'Spanish',
      value: '60',
    },
    {
      label: 'German',
      value: '40',
    },
  ],
};

export default languageSkillsData;
