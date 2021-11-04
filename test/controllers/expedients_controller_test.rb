require "test_helper"

class ExpedientsControllerTest < ActionDispatch::IntegrationTest
  def should_get_show
    get expedients_show_url
    assert_response :success
  end
end
