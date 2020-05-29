

# //////////////////////////////////////////////////////////////   Partition Sorting ///////////////////////////////////////////////////////////


# function swap(arr, i, j) {
#     [arr[i], arr[j]] = [arr[j], arr[i]];
# }

# // Sir Charles Antony Richard Hoare partitioning scheme
# function partitionHoare(arr, left, right) {
#     const pivot = arr[Math.floor((left + right) / 2)];

#     while (left <= right) {
#         while (arr[left] < pivot && left <= right) {
#             left++;
#         }
#         while (arr[right] > pivot) {
#             right--;
#         }
#         if (left <= right) {
#             [arr[left], arr[right]] = [arr[right], arr[left]];
#             left++;
#             right--;
#         }
#     }
#     // swap(arr, left, Math.floor((left + right)) / 2);
#     return left;
# }




# // Lomuto partitioning scheme, less efficient, easier to read
# function partitionLomuto(arr, left, right) {
#     const pivot = arr[right];
#     let i = left;

#     for (let j = left; j < right; j++) {
#       if (arr[j] <= pivot) {
#         swap(arr, i, j);
#         i++;
#       }
#     }
#     swap(arr, i, right);
#     return i;
#   }




# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////




# Recursive Binary Search

# Input: SORTED list of ints
# Output: bool representing if value is found

# Recursively search to find if the value exists, do not loop over every element.

# Examples:

# Input: [1,3,5,6], 4
# Output: false

# Input: [4,5,6,8,12], 5
# Output: true

# Approach:
# Take the middle item and compare it to the given value.
# Based on that comparison, narrow your search to a particular section of the list

# .slice can be used but is not absolutely necessary
# .slice(startIdx, endIdx)
# - returns a section of the list from startIdx to endIdx exclusive

# First time search from 0 to length of the list
# def binary_search(alist, target, start, end):
#     if start <= end:
#         mid = start + (end - start) // 2

#         if alist[mid] == target:
#             return True 
#         elif alist[mid] < target:
#             return binary_search(alist, target, mid + 1, end)
#         else:
#             return binary_search(alist, target, start, mid - 1)
#     else:
#         return False

# alist_1 = [1,3,5,6]
# target_1 = 4

# alist_2 = [4,5,6,8,12]
# target_2 = 5

# print(binary_search(alist_1, target_1, 0, len(alist_1)))
# print(binary_search(alist_2, target_2, 0, len(alist_2)))






# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# def sigma(num):
#     sum=0
#     for i in num:
#         sum = sum+i
#     return sum
# print(sigma(5))




# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




# def missing_value(a_list):
#     sum = 0
#     max = -100000
#     min = 1000000

#     for num in range(len(a_list)):
#         if a_list[num] > max:
#             max = a_list[num]
#         if a_list[num]<min:
#             min = a_list[num]
#     if max - min + 1 ==len(a_list):
#         print('not missing any avlues')
#         return[0]
#     else:
#         for num in range(len (a_list)):
#             sum = sum+a_list[num]
#         for i in range(min, max):
#             sum = sum - i
#             sum = abs(sum)
#         if sum == 0:
#             print('There is no missing value')
#         return sum

# print(missing_value([3, 0, 1, 4, -1]))





# ///////////////////////////////////////////////////////////////////////////////////////////////////////


# def coin_change(int1):
#     coin_dict={
#     "quart" : 0,
#     "dime": 0,
#     'nickel' : 0,
#     'penny' : 0
#     }
#     x = int1
#     while x != 0:
#         if x>25:
#             number_of_quarters = x//25
#             coin_dict["quart"] = number_of_quarters
#             x = x%25
#         if x > 10:
#             number_of_dimes = x//10
#             coin_dict['dime'] = number_of_dimes
#             x = x%10
#         if x > 5:
#             number_of_nickels = x//5
#             coin_dict["nickel"] = number_of_nickels
#             x = x%5
#         if x > 1:
#             number_of_pennies = x//1
#             coin_dict["penny"] = number_of_pennies
#             x = x%1
#         return(coin_dict)

# print(coin_change(67))





# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




# def remove_dups(a_list):
#     new_list =[]
#     for x in range(len(a_list)-1):
#         if a_list[x] == a_list[x+1]:
#             new_list.append(a_list[x])
#     return new_list
# print(remove_dups([2,2,3,4,5,6,6,6]))


# def remove_dups(a_list):
#     x = 0
#     while x < len(a_list):
#         if a_list[x] == a_list[x-1]:
#             a_list.pop(x) 
#             x+=1
#             print(x)
#             print(a_list)
#         else:
#             print(x)
#             print(a_list)
#             x+=1
#     return a_list
# print(remove_dups([2,2,3,4,5,6,6,6]))

#//////////////////  this one doesnt get the last number in the list  //////////////////////////////





# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


#  Find the variable in a list of numbers in order...


# x=[1, 4, 4, 5, 5, 5, 5, 5 ,8, 9, 9, 19, 20] 
# y=20


# def searchparty(mylist,searchnumber):
#     startingpoint = 0
#     endingpoint = len(mylist)
#     if mylist[endingpoint-1] < y or mylist[startingpoint] > y:
#         return False
#     while startingpoint < endingpoint:
#         middle = (endingpoint + startingpoint) // 2
#         print(f"starting while~~ startingpoint {startingpoint} - endingpoint {endingpoint} - middle {middle}")
#         if mylist[middle] == searchnumber or mylist[startingpoint] == searchnumber or mylist[endingpoint] == searchnumber:
#             return True
#         if middle == startingpoint:
#             return False
#         elif mylist[middle] < searchnumber:
#             startingpoint = middle
#         else:
#             endingpoint = middle
#     return False


# print(searchparty(x,y))





# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# Here, a balance point is on an index, not between indices.
# Return the balance index where sums are equal on either side
# (exclude its own value).

# Return -1 if none exist.

# Input: [-2,5,7,0,3]
# Output: 2

# Input: [9,9]
# Output: -1

# x = [-2,5,7,0,3]

# def bal(x):
#     if len(x)<3:
#         return -1
        
#     for i in range(len(x)):
#         if sum(x[0:i]) == sum(x[i+1:len(x)]):
#             return i
#     return -1

# print(bal(x))



# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# Write a function that returns whether the given
# list has a balance point between indices, 
# where one side’s sum is equal to the other’s.


# x=[1,2,3,4,10]

# def bal(x):
#     for i in range(len(x)):
#         if sum(x[0:i]) == sum(x[i:len(x)]):
#             return True
        
#     return False

# print(bal(x))



# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# q = [] 
# z = [{ 'name': "Peanut Butter", 'quantity': 20 }]

# def update_inventory(current_inv, new_inv):
#     # edge cases (current_inv is empty)
#     if current_inv == [] and len(new_inv) > 0:
#         # we want to copy new_inventory into current_inventory
#         current_inv = new_inv[:]
#     print(new_inv)
# update_inventory(q,z)


# Given an array of objects / dictionaries to represent new inventory,
# and an array of objects / dictionarys to represent current inventory,
# update the quantities of the current inventory

# if the item doesn't exist in current inventory, add it to the inventory
# return the current inventory after updating it.
# Examples:

# Input: [
# { name: "Grain of Rice", quantity: 9000 },
# { name: "Peanut Butter", quantity: 50 },
# { name: "Royal Jelly", quantity: 20 },
# ],

# [
# { name: "Peanut Butter", quantity: 20 },
# { name: "Grain of Rice", quantity: 1 },
# ]

# Output: [
# { name: "Peanut Butter", quantity: 70 },
# { name: "Grain of Rice", quantity: 9001 },
# { name: "Royal Jelly", quantity: 20 },
# ]


# x = [
# { "name": "Grain of Rice", "quantity": 9000 },
# { "name": "Peanut Butter", "quantity": 50 },
# { "name": "Royal Jelly", "quantity": 20 },
# ]

# y = [
# { "name": "Peanut Butter", "quantity": 20 },
# { "name": "Grain of Rice", "quantity": 1 },
# ]

# def update_inventory(current_inv, new_inv):

# edge cases (current_inv is empty)
#     if current_inv == [] and len(new_inv) > 0:
#         we want to copy new_inventory into current_inventory
#         current_inv = new_inv[:]
    
#     handles the case where there isn't any new inventory
#     if new_inv == []:
#         return current_inv
#     # iterate over each dictionary in new_inv
#     for new_item in new_inv:
#         # create a flag that will tell us if we updated an item (if not, we know we need to add it) 
#         product_added = False
#         #iterate over each dictionary in current_inv
#         for product in current_inv:
#             # if both dicts have the same key, they have the same product
#             if new_item["name"] == product["name"]:
#                 # we increase the quantity in current_inv
#                 product["quantity"] += new_item["quantity"]
#                 # we set our flag to be true
#                 product_added = True
#                 # we break out of inner loop (avoids unnessary searches)
#                 break
#             #  if our flag is still False, the new item isn't in current inv
#         if not product_added:
#             # so we added it
#             current_inv.append(new_item)
#         # at the end of it all, return current inv
#     return current_inv

# print(update_inventory(x,y))





# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



# find if 2 stings are anograms **************************************************


# def anagram(str1, str2):
#     # adict mapping characters (k) and number of occurences (v)
#     str1, str2 = str1.lower(), str2.lower()
#     map1 = {}
#     for char in str1:
#         if char.isalpha():
#             try:
#                 map1[char] += 1
#             except KeyError:
#                 map1[char] = 1
#     map2 = {}
#     for char in str2:
#         if char.isalpha():
#             try:
#                 map2[char] += 1
#             except KeyError:
#                 map2[char] = 1
#     for k,v in map1.items():
#         if k not in map2 or map2[k] != v:
#             return False
#     return True

# print(anagram('yes', 'eys'))
# print(anagram('what', 'who'))
# print(anagram("yes", "eyss"))


# ////////////////////////////////////cleaner one 
# def freq_map(astring):
#     output = {}
#     for char in astring:
#         if char.isalpha():
#             try:
#                 output[char] += 1
#             except KeyError:
#                 output[char] = 1
#     return output

# def anagram(str1, str2):
#     # adict mapping characters (k) and number of occurences (v)
#     str1, str2 = str1.lower(), str2.lower()
#     map1, map2 = freq_map(str1), freq_map(str2)

#     for k,v in map1.items():
#         if k not in map2 or map2[k] != v:
#             return False
#     return True








# //////////////////////////////////////////////////////////////////////////////////////////////////////


# def rotate(string1,num):

#     output_str=''

#     if num < 0:
#         for i in string1:
#             output_str += (string1[i-(num*num)])
#     else:
#         newnum = num % len(string1)
#         for i in range(len(string1)):
#             output_str += (string1[i-newnum])
#     return output_str

# print(rotate('Hello World',1))
# print(rotate('Hello World',2))
# print(rotate('Hello World',0))





# def rotate(str,num):
#     output_str=''
#     # for num in range(len(str)):
#     #     output_str += (str[num] + num)
#     #     output_str=''
#     newlist = []
#     for i in str:
#         newlist.append(i)
#     for x in range(len(str)):
#         output_str += (str[x] + x)
# print(rotate('Hello World',1))






# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



# def checkfornumbers(string):
#     output_int = ""
#     for i in string:
#         try:
#             int(i)
#             output_int += i
#         except:
#             return output_int
#     print(output_int)
# checkfornumbers('b4t2c3')




# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



# String Encode
# You are given a string that may contain sequences of consecutive characters.
# Create a function to shorten a string by including the character,
# then the number of times it appears. 

# Input: "aaaabbcddd"
# Output: "a4b2c1d3"

# If result is not shorter (such as "bb" => "b2" ),
# return the original string.

# string1 = 'aafaabbcddd'
# string2 = 'bb'
# string3 = 'abcdefghijk'
# string4 = 'georgethrewhiscatintooblivion'

# def encode(mystring):
#     output_string = ""
#     count = 1
#     for i in range(1,len(mystring),1):
#         if mystring[i-1] == mystring[i]:
#             count += 1
#         else:
#             # output_string += mystring[i-1] + str(count)
#             # Extra Challenge: shorten string even further
#             if count > 1:
#                 output_string += mystring[i-1] + str(count)
#             else:
#                 output_string += mystring[i-1]
#             count = 1
#     output_string += mystring[i-1] + str(count)
#     if len(output_string) < len(mystring):
#         return(output_string)
#     else:
#         return(mystring)

# print(encode(string1))





# ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





#1. Reverse Word Order
# Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.

# Input: "This is a test"
# Output: "test a is This"

# astring= "This is a test"
# def reverse_word_order(astring):
#     alist = astring.split(" ")
#     output = ""
#     for x in alist[::-1]:
#         output += x + " "

#     return output



# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




# def reverse_word_order(astring):
#     alist = create_list_from_string(astring)
#     output = ""
#     for x in alist[::-1]:
#         output += x + " "

#     return output

# def create_list_from_string(astring):
#     alist = []
#     new_string = ""
#     for i in range(len(astring)):
#         if astring[i] == " " or i+1 >= len(astring):
#             alist.append(new_string)
#             new_string = ""
#         else:
#             new_string += astring[i]
    
#     return alist

# print(reverse_word_order('This is a test'))




# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




# #2. Frequency Table
# 
# Given an array of strings
# return a sum to represent how many times each array item is found (a frequency table)
# Useful methods:
#   Object.hasOwnProperty("keyName")
#     - returns true or false if the object has the key or not
#   Python: dict.has_key(key)
# Examples:
# Input: ['a', 'a', 'a', '']
# Output: {
#   'a': 3
# }
# Input: ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']
# Output: {
#   a: 2,
#   b: 1,
#   c: 3,
#   B: 1,
#   d: 1
# }

# def frequency_table(alist):
#     newDict = {}
#     for x in alist:
#         if x in newDict:
#             newDict[x] = newDict[x] + 1
#         else:
#             newDict[x] = 1

#     return newDict

# input1 = ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']

# print(frequency_table(input1))





# //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





# dict1 = {"name": "Zaphod", "charm": "high", "morals": "dicey"}
# dict2 = {"Zaphod": "name", "high": "charm", "dicey": "morals"}

# def invertHash(dict):
#     output_dict = {}
#     for key, value in dict.items():
#         output_dict[value] = key
#     return output_dict

# print(invertHash(dict2))