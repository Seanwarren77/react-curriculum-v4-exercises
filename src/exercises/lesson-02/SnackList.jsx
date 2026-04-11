// Component responsible for displaying the ranked snack list
function SnackList() {
  // Array of snack objects
  // rank 1 = favorite
  const snacks = [
    { name: 'Fruit', rank: 3 },
    { name: 'Chocolate', rank: 1 },
    { name: 'Chips', rank: 2 },
    { name: 'Almonds', rank: 4 },
  ];

  // Sort snacks from most favorite (rank 1) to least favorite
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack, index) => (
        <li key={index}>
          {snack.name} (Rank #{snack.rank})
        </li>
      ))}
    </ol>
  );
}

export default SnackList;
