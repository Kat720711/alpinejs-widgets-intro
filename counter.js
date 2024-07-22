function Counter() {
    return {
        count: 0,
        maxCount: 10, 
        minCount: 0,  

        increment() {
            if (this.count < this.maxCount) {
                this.count++;
            }
        },

        decrement() {
            if (this.count > this.minCount) {
                this.count--;
            }
        },

        reset() {
            this.count = 0;
        }
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
});
