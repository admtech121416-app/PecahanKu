const fs = require('fs');

let content = fs.readFileSync('src/pages/Lesson.tsx', 'utf8');
content = content.replace(
  "const lesson = lessons[currentLesson];",
  `const lesson = lessons[currentLesson];
  const [shuffledExamples, setShuffledExamples] = useState<any[]>([]);
  
  React.useEffect(() => {
    if (lesson) {
      setShuffledExamples([...lesson.examples].sort(() => Math.random() - 0.5));
    }
  }, [lesson]);`
);
content = content.replace(
  "lesson.examples.map((example, index)",
  "shuffledExamples.map((example, index)"
);

fs.writeFileSync('src/pages/Lesson.tsx', content);
console.log('Shuffled examples in Lesson');
