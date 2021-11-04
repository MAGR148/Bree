require "test_helper"

class GeneralsControllerTest < ActionDispatch::IntegrationTest
  def should_get_index
    get generals_index_url
    assert_response :success
  end
end
