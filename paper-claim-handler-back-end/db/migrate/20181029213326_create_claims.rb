class CreateClaims < ActiveRecord::Migration[5.2]
  def change
    create_table :claims do |t|
      t.string :form_name
      t.integer :user_id
      t.integer :recipient_id
      t.string :icd_code
      t.timestamps
    end
  end
end
