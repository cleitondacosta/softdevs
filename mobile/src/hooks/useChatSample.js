const longMessage = `
  Amet rem quisquam culpa adipisci laborum nemo Illum ratione laboriosam 
  quaerat architecto officia eligendi? Molestiae consequatur sed impedit 
  corrupti nulla, dolorem? Quas nesciunt obcaecati nemo aspernatur ullam. 
  Nesciunt. lorem ipsum adipisicing libero incidunt deserunt accusamus natus 
  Accusamus veritatis rerum animi eligendi minus iure Qui tempore iste ex 
  repellat tempore? Labore dolorum numquam tenetur alias consequatur Ipsum nemo 
  atque molestias nihil?
`;

export default function useChatSample() {
  return [
    { text: 'Message 1', date: '02/09/1998', alignSelf: 'flex-start' },
    { text: 'Message 2', date: '02/09/1998', alignSelf: 'flex-start' },
    { text: 'Message 3', date: '02/09/1998', alignSelf: 'flex-end' },
    { text: 'Message 4', date: '02/09/1998', alignSelf: 'flex-start' },
    { text: 'Message 5', date: '02/09/1998', alignSelf: 'flex-start' },
    { text: longMessage, date: '02/09/1998', alignSelf: 'flex-start' },
  ];
}
