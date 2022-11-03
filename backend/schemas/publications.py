def publicationEntity(item) -> dict:
    return {
        "id": str(item["_id"]),
        "year": item["year"],
        "title": item["title"],
        "authors": item["authors"],
        "journal": item["journal"],
        "pissue": item["pissue"],
        "link": item["link"],
        "pdf": item["pdf"],
        "abstract": item["abstract"]
    }


def publicationsEntity(entity) -> list:
    return [publicationEntity(item) for item in entity]
