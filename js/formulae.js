/**
 * Created by adsal on 2/1/2017.
 */
/*
 =IF(
    ChangeHousing!E15="Standard",C16, // ChangeHousing!E15 is number of rooms dropdown. Standard, 1, 2, 3, or 4
                                      // C16 is housing cost
    IF(
        ChangeHousing!E15=1,Housing!K8, // K8 is one-bedroom annual average
        IF(
            ChangeHousing!E15=2,Housing!L8, // L8 is two-bedroom annual average
            IF(
                ChangeHousing!E15=3,Housing!M8, // M8 is three-bedroom annual average
                IF(
                    ChangeHousing!E15=4,Housing!N8,0 // N8 is four-bedroom annual average
                  )
              )
          )
      )
   )
   +IF(
       ChangeChildcare!E13>0,ChangeChildcare!E13, // ChangeChildcare!E13 is estimated annual babysitting costs
       IF(
          ChangeChildcare!I13="Yes",'Cost By Age'!P16,'Cost By Age'!D16 // I13 is family care yes/no
                                                                        // 'Cost By Age'!P16 is sum of family child care costs
                                                                        // 'Cost By Age'!D16 is sum of regular child care costs
          )
      )

  +F16 // Car insurance cost
  +G16 // Car ownership cost
  +IF(
      MarketplaceHealthcare!F16="No",'Cost By Age'!I17,'Cost By Age'!V17 // !F16 is Marketplace Healthcare instead of employer-sponsored health care
                                                                         // I17 is out-of-pocket healthcare costs
                                                                         // V17 is marketplace cost
      )
  +J16 is entertainment cost
  +K16 is miscellaneous cost
  +L16 is excessive children
  +M16 is excessive adult
  +R16 is public transportation cost
  +E16 is food cost

 */