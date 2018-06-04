## Collectible EIP721 Badges

[![codecov](https://codecov.io/gh/UjoTeam/contracts-badges/branch/master/graph/badge.svg)](https://codecov.io/gh/UjoTeam/contracts-badges)  
[![CircleCI](https://circleci.com/gh/UjoTeam/contracts-badges.svg?style=svg)](https://circleci.com/gh/UjoTeam/contracts-badges)  

These contracts manages the collectibles that are minted when buying releases.

Auto Badges are minted automatically from a given handler.   

These only accept payments from an approved handler [set by an admin].   

These badges are currently being regardless whether the criteria is correct in the metadata or not. Thus, some of the badges might not be legitimate. Currently, Ujo will off-chain verify this. However, in the future, we will verify the badges manually, which acts a proof that the payment was correctly issued.
