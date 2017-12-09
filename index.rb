def print_badges(employee_names)
  employee_names.each_with_index do |employee, index|
    puts "Welcome #{employee}! You are employee ##{index + 1}."
  end
  employee_names
end

def tails_never_fails
  tail_streak = 0
  while rand >= 0.5
    tail_streak+= 1
  end
  "You got #{tail_streak} tails in a row!"
end
