class GuessingGame {
    constructor(value) {
        this.root = value;
        this.left = null;
        this.right = null;
    }
    
    setRange(min, max) {
        this.left = min;
        this.right = Math.round(max / 2);
    }
  
    guess() {
        return this.right;
    }
  
    lower() {
        this.right = Math.round((this.right - this.left) / 2 + this.left);
        this.guess();
    }
  
    greater() {
        let a = Math.round((this.right - this.left) / 2 + this.right);
        this.left = this.right;
        this.right = a;
        this.guess()
    }
}


module.exports = GuessingGame;
