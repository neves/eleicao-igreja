def group_count_votes(votes)
  votes.map(&:values)
       .flatten
       .each_with_object(Hash.new(0)) do |user_id, counts|
         counts[user_id] += 1
       end
end

