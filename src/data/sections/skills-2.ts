interface SkillItem {
  label: string;
  value: string;
}

interface SkillsData {
  title: string;
  items: SkillItem[];
}

const skillsData: SkillsData = {
  title: 'Hard Skills',
  items: [
    { label: 'Figma', value: '95' },
    { label: 'Adobe XD', value: '90' },
    { label: 'Sketch', value: '80' },
    { label: 'PhotoShop', value: '70' },
    { label: 'Html', value: '40' },
    { label: 'Css', value: '40' },
  ],
};

export default skillsData;
