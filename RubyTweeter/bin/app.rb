require 'sinatra'
set :port, 8080
set :static, true #no need
set :public_folder, "static" #no need
set :views, "views" #

get '/' do
  erb :index

end

get '/tweets' do
  print "lanch"
end

post '/tweets' do
  erb :index
  print "Go OG"
end