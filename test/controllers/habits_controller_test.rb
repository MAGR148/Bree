require "test_helper"

class HabitsControllerTest < ActionDispatch::IntegrationTest
  def should_get_index
    get habits_index_url
    assert_response :success
  end
end
