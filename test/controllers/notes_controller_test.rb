require "test_helper"

class NotesControllerTest < ActionDispatch::IntegrationTest
  def should_get_index
    get notes_index_url
    assert_response :success
  end
end
