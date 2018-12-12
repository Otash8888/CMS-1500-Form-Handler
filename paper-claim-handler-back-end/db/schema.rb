# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_29_213347) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "claims", force: :cascade do |t|
    t.string "form_name"
    t.integer "user_id"
    t.integer "recipient_id"
    t.string "icd_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recipients", force: :cascade do |t|
    t.string "1"
    t.string "1_a"
    t.string "2_lname"
    t.string "2_fname"
    t.string "2_mi"
    t.string "3_mm"
    t.string "3_dd"
    t.string "3_yy"
    t.string "3_sex"
    t.string "4_lname"
    t.string "4_fname"
    t.string "4_mi"
    t.string "5_street"
    t.string "5_city"
    t.string "5_state"
    t.string "5_zip_code"
    t.string "5_tel"
    t.string "6"
    t.string "7_street"
    t.string "7_city"
    t.string "7_state"
    t.string "7_zip_code"
    t.string "7_tel"
    t.string "9_lname"
    t.string "9_fname"
    t.string "9_mi"
    t.string "9_a"
    t.string "9_d"
    t.string "10_a"
    t.string "10_b"
    t.string "10_b_state"
    t.string "10_c"
    t.string "10_d"
    t.string "11"
    t.string "11_a_mm"
    t.string "11_a_dd"
    t.string "11_a_yy"
    t.string "11_a_sex"
    t.string "11_b_idf"
    t.string "11_b_num"
    t.string "11_c"
    t.string "11_d"
    t.string "12_sign"
    t.string "12_date"
    t.string "13"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
