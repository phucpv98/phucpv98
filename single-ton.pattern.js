'use-strict'

class RoundRobin {
    constructor() {
        // if(RoundRobin.instance) {
        //     return RoundRobin.instance
        // }
        // RoundRobin.instance = this
        this.server = []
        this.index = 0
    }

    // add server
    addServer(server) {
        this.server.push(server)
    }

    // get next server
    getNextServer() {
        if(!this.server.length) {
            throw new Error('No server available!')
        }

        const server = this.server[this.index]

        //modulus
        this.index = (this.index + 1) % this.server.length
        return server
    }
}

// Create 2 load balencer
const loadbalancer1 = new RoundRobin()
const loadbalancer2 = new RoundRobin()

// Add Server to System
loadbalancer1.addServer('Server1')
loadbalancer1.addServer('Server2')
loadbalancer1.addServer('Server3')
loadbalancer2.addServer('Server4')
loadbalancer2.addServer('Server5')
loadbalancer2.addServer('Server6')

console.log('compare:: ', loadbalancer1 === loadbalancer2)

// evenly distributed
console.log(loadbalancer1.getNextServer())  // 1
console.log(loadbalancer1.getNextServer())  // 2
console.log(loadbalancer1.getNextServer())  // 3
console.log(loadbalancer1.getNextServer())  // 4
console.log(loadbalancer1.getNextServer())  // 5
console.log(loadbalancer2.getNextServer())  // 6
console.log(loadbalancer2.getNextServer())  // 1
console.log(loadbalancer2.getNextServer())  // 2
console.log(loadbalancer2.getNextServer())  // 3
console.log(loadbalancer2.getNextServer())  // 4
