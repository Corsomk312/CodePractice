class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.references :user
      t.references :question
      t.text       :content
      t.boolean    :favorite

      t.timestamps
    end
  end
end
