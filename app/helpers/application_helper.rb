module ApplicationHelper
  def site_name
    "#JEANGELIQUE"
  end

  def title
    [ @page.title.presence, site_name ].compact.join(" · ")
  end

  def description
    @page.frontmatter&.dig(:description) || site_name
  end

  def author
    "JEANGELIQUE"
  end

  def canonical_url
    url_for(only_path: false)
  end

  def robots_content
    "noindex, nofollow"
  end
end
