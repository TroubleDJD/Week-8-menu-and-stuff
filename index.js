
 
 


class NLTeam {
    constructor(teamCity, teamName){
        this.teamCity = teamCity;
        this.teamName = teamName;
    }
    introduce() {
        console.log(`${this.teamCity} ${this.teamName} competes in the NL West`);
    }
}

let nlTeam1 = new NLTeam('LA', 'Dodgers');
let nlTeam2 = new NLTeam('SF', 'Giants');  

nlTeam1.introduce();
nlTeam2.introduce();

class ALTeam {
  constructor(teamCity, teamName){
      this.teamCity = teamCity;
      this.teamName = teamName;
  }
  introduce() {
      console.log(`${this.teamCity} ${this.teamName} competes in the AL West`);
  }
}

let alTeam1 = new ALTeam('LA', 'Angels');
let alTeam2 = new ALTeam('LV', 'Athletics');  

alTeam1.introduce();
alTeam2.introduce();



  



