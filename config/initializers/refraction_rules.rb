Refraction.configure do |req|
  case req.host
    when 'www.dealerignition.com'
      req.permanent! "http://dealerignition.com/#{req.path}"
    when /([-\w]+\.)?dealerignition\.com/
      # passthrough with no change
    else  # wildcard domains (e.g. pivotalabs.com)
  end
end