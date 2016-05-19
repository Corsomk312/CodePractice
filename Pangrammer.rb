#!/usr/bin/env ruby

def pangram(string)
   counter = 0
   alpha_check = []
   split_string = string.split('')
   split_string.delete(' ')

   while counter < split_string.length
      current = split_string[counter]
      if !alpha_check.include?(current)
        alpha_check << current
        split_string.delete(current)
        counter = 0

      else
        counter += 1
      end
   end

   if alpha_check.length == 26
       return 'pangram'
   else
       return 'not pangram'
   end
end

# pangram(STDIN.gets)

STDOUT.puts(pangram(STDIN.gets.chomp))