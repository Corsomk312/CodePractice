class CreateStudents < ActiveRecord::Migration
  enable_extension "hstore"
  def change
    create_table :students do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.integer :grade
      t.integer :detentions
      t.hstore  :grades


      t.timestamps null: false
    end
  end
end
