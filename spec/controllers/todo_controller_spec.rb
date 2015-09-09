require 'rails_helper'

describe Apps::TodoController do

  describe 'get #index' do
    it 'renders the :index template' do
      get :index
      expect(response).to render_template :index
    end
  end

end