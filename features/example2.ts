class HelloWorld {
  public static main(args: string[]) {
    console.info("Hello World");
    const limit: number = 25;
    let sum: number = 60;
    const randomValue: number = 2.77;
    for(let __var: number = 1; __var < limit; __var = __var + 3) {{ // O((n+1)/3)
      console.info("randomValue: " + randomValue); // O(n)
      for(let j: number = 1; j < limit; j = j + 2) {{ // O(n*((n+1)/2))
        sum++; // O(n*n)
      };}
      console.info("Sum = " + sum); // O(n)
    };}
  }
}
HelloWorld["__class"] = "HelloWorld";

function solution(alice: number[], bob: number[]): number[] {
  let answer: number[] = [0,0];
  for(let i: number = 0; i< alice.length; i++){
    if(alice[i] > bob[i]){
      answer[0]++;
    }
    else if(alice[i] < bob[i]) {
      answer[1]++;
    }
  }
  return answer;
}