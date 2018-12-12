# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  # movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  # Character.create(name: 'Luke', movie: movies.first)

  user = User.create(name:"Otash",email:"otash@test.com")
  user1 = User.create(name:"Sher",email:"sher@test.com")

  r = Recipient.create(name:"Aziz",dob:25)
    r1 = Recipient.create(name: "eben",dob: 30)

      claim = Claim.create(form_name: "CM1500",user_id: user.id,recipient_id: r1.id, icd_code:"f707m")

      ins1 = Insurance.create(name: "medicaid", address: "123 ave")

      ins2 = Insurance.create(name: "medicare", address: "54 st")

      insuranceClaim1 = InsuranceClaim.create(claim_id: claim.id, insurance_id: ins2.id)
