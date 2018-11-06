let store = {drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = ++ driverId
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
    return this.trips().map(trip => trip.passenger())
  }
}

let passengerId = 0

class Passenger {
  constructor(name) {
    this.id = ++ passengerId
    this.name = name

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
    return this.trips().map(trip => trip.driver())
  }
}

let tripId = 0

class Trip {
  constructor(driver, passenger) {
    this.id = ++ tripId
    if(driver) {
      this.setDriver(driver)
    }

    if(passenger) {
      this.setPassenger(passenger)
    }

    store.trips.push(this)
  }

  setDriver(driver) {
    this.driverId = driver.id
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id
  }

  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    )
  }

  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    )
  }
}