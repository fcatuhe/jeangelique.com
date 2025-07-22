class PagesController < ApplicationController
  def _show
    @page = Page.find(params[:slug])
  end
end
