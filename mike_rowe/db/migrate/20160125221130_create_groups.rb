class CreateGroups < ActiveRecord::Migration
  enable_extension "hstore"
  def change
    create_table :groups do |t|
      t.references :teacher
      t.references :student
      t.date :date

      t.timestamps null: false
    end
  end
end
