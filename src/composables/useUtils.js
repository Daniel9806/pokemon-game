import { computed } from "vue";

const useUtils = () => {
  //Computed

  //Methods
  const getMonth = (month) => {
    switch (month) {
      case 1:
        return "Enero";
      case 2:
        return "Febrero";
      case 3:
        return "Marzo";
      case 4:
        return "Abril";
      case 5:
        return "Mayo";
      case 6:
        return "Junio";
      case 7:
        return "Julio";
      case 8:
        return "Agosto";
      case 9:
        return "Septiembre";
      case 10:
        return "Octubre";
      case 11:
        return "Noviembre";
      case 12:
        return "Diciembre";
    }
  };

  //Random number with especific decimal 
  const getRandomBetween = (min, max, decimal) => {
    var number = Math.random() * (max - min) + min
    return number.toFixed(decimal)
  }
   
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return {
    getMonth,
    getRandomBetween,
    getRndInteger
  };
};

export default useUtils;
