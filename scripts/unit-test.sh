#!/bin/bash
# Executes Meteor unit tests using the mocha driver
meteor test  --driver-package practicalmeteor:mocha

# Use --settings to load custom settings during tests
#meteor test --settings settings.json --driver-package practicalmeteor:mocha
