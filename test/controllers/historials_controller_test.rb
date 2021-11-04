require "test_helper"

class HistorialsControllerTest < ActionDispatch::IntegrationTest
  def should_get_new
    get historials_new_url
    assert_response :success
  end
end
