# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_10_042515) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "group_portions", force: :cascade do |t|
    t.bigint "plan_id", null: false
    t.jsonb "vegetables", default: {"energy"=>25, "lipids"=>0, "protein"=>2, "quantity"=>0, "carbohydrates"=>4}, null: false
    t.jsonb "fruit", default: {"energy"=>60, "lipids"=>0, "protein"=>0, "quantity"=>0, "carbohydrates"=>15}, null: false
    t.jsonb "cereals_s_g", default: {"energy"=>70, "lipids"=>0, "protein"=>2, "quantity"=>0, "carbohydrates"=>15}, null: false
    t.jsonb "cereals_c_g", default: {"energy"=>115, "lipids"=>5, "protein"=>2, "quantity"=>0, "carbohydrates"=>15}, null: false
    t.jsonb "legumes", default: {"energy"=>120, "lipids"=>1, "protein"=>8, "quantity"=>0, "carbohydrates"=>20}, null: false
    t.jsonb "aoa_mbag", default: {"energy"=>40, "lipids"=>1, "protein"=>7, "quantity"=>0, "carbohydrates"=>0}, null: false
    t.jsonb "aoa_bag", default: {"energy"=>55, "lipids"=>3, "protein"=>7, "quantity"=>0, "carbohydrates"=>0}, null: false
    t.jsonb "aoa_mag", default: {"energy"=>75, "lipids"=>5, "protein"=>7, "quantity"=>0, "carbohydrates"=>0}, null: false
    t.jsonb "aoa_aag", default: {"energy"=>100, "lipids"=>8, "protein"=>7, "quantity"=>0, "carbohydrates"=>0}, null: false
    t.jsonb "skim_milk", default: {"energy"=>95, "lipids"=>2, "protein"=>9, "quantity"=>0, "carbohydrates"=>12}, null: false
    t.jsonb "semi_milk", default: {"energy"=>110, "lipids"=>4, "protein"=>9, "quantity"=>0, "carbohydrates"=>12}, null: false
    t.jsonb "whole_milk", default: {"energy"=>150, "lipids"=>8, "protein"=>9, "quantity"=>0, "carbohydrates"=>12}, null: false
    t.jsonb "milk_c_a", default: {"energy"=>200, "lipids"=>5, "protein"=>8, "quantity"=>0, "carbohydrates"=>30}, null: false
    t.jsonb "fats_s_p", default: {"energy"=>45, "lipids"=>5, "protein"=>0, "quantity"=>0, "carbohydrates"=>0}, null: false
    t.jsonb "fats_c_p", default: {"energy"=>70, "lipids"=>5, "protein"=>3, "quantity"=>0, "carbohydrates"=>3}, null: false
    t.jsonb "sugars_s_g", default: {"energy"=>40, "lipids"=>0, "protein"=>0, "quantity"=>0, "carbohydrates"=>10}, null: false
    t.jsonb "sugars_c_g", default: {"energy"=>85, "lipids"=>5, "protein"=>0, "quantity"=>0, "carbohydrates"=>10}, null: false
    t.jsonb "ale", default: {"energy"=>0, "lipids"=>0, "protein"=>0, "quantity"=>0, "carbohydrates"=>0}, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["plan_id"], name: "index_group_portions_on_plan_id"
  end

  create_table "invitations", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "city"
    t.boolean "nutrition_professional"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "macronutrients", force: :cascade do |t|
    t.bigint "plan_id", null: false
    t.jsonb "carbohydrates", default: {"percentage"=>50}, null: false
    t.jsonb "protein", default: {"percentage"=>25}, null: false
    t.jsonb "lipids", default: {"percentage"=>25}, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["plan_id"], name: "index_macronutrients_on_plan_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "avatar"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "age"
    t.float "weight"
    t.float "height"
    t.string "gender"
    t.float "physical_activity_factor"
    t.index ["user_id"], name: "index_patients_on_user_id"
  end

  create_table "plans", force: :cascade do |t|
    t.bigint "patient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "calories", default: 0
    t.index ["patient_id"], name: "index_plans_on_patient_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "name", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "group_portions", "plans"
  add_foreign_key "macronutrients", "plans"
  add_foreign_key "patients", "users"
  add_foreign_key "plans", "patients"
end
