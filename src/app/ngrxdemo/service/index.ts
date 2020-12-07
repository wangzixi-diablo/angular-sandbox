interface People {
    age: number;
    name: string;
  }
  
const Jerry:People = {
      age: 10,
      name: 'Jerry'
  };
  
type AnonymousPeople = Partial<People>;
  
  const tom:AnonymousPeople = {
      name: 'Tom'
  };