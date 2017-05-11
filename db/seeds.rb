require 'faker'

30.times { Post.create(title: Faker::Beer.name, body: Faker::Lorem.paragraphs)}
