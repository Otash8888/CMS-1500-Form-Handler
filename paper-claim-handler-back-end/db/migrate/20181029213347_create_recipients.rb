class CreateRecipients < ActiveRecord::Migration[5.2]
  def change
    create_table :recipients do |t|
      t.string :"1"
      t.string :"1_a"
      t.string :"2_lname"
      t.string :"2_fname"
      t.string :"2_mi"
      t.string :"3_mm"
      t.string :"3_dd"
      t.string :"3_yy"
      t.string :"3_sex"
      t.string :"4_lname"
      t.string :"4_fname"
      t.string :"4_mi"
      t.string :"5_street"
      t.string :"5_city"
      t.string :"5_state"
      t.string :"5_zip_code"
      t.string :"5_tel"
      t.string :"6"
      t.string :"7_street"
      t.string :"7_city"
      t.string :"7_state"
      t.string :"7_zip_code"
      t.string :"7_tel"
      t.string :"9_lname"
      t.string :"9_fname"
      t.string :"9_mi"
      t.string :"9_a"
      t.string :"9_d"
      t.string :"10_a"
      t.string :"10_b"
      t.string :"10_b_state"
      t.string :"10_c"
      t.string :"10_d"
      t.string :"11"
      t.string :"11_a_mm"
      t.string :"11_a_dd"
      t.string :"11_a_yy"
      t.string :"11_a_sex"
      t.string :"11_b_idf"
      t.string :"11_b_num"
      t.string :"11_c"
      t.string :"11_d"
      t.string :"12_sign"
      t.string :"12_date"
      t.string :"13"

      t.timestamps
    end
  end
end
