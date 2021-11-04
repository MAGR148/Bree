require "test_helper"

class AnthropometricsControllerTest < ActionDispatch::IntegrationTest
  def should_get_index 
    get anthropometrics_index_url
    assert_response :success
  end
end
