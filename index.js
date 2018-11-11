let driverId = 0
let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id
      }.bind(this)
    )
  }

  passengers() {
    return this.trips().map(
      function(trip) {
        return trip.passenger()
      }.bind(this)
    )
  }

}

let passengerId = 0
class Passenger {
  constructor(name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id
      }.bind(this)
    )
  }

  drivers() {
    return this.trips().map(
      function(trip) {
        return trip.driver()
      }.bind(this)
    )
  }


}

let tripId = 0
class Trip {
  constructor(driver, passenger){
    store.trips.push(this)
    this.id = ++tripId
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }

  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId
      }.bind(this)
    )
    }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId
      }.bind(this)
    )
  }

}
