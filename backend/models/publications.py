from pydantic import BaseModel


class PublicationModel(BaseModel):
    year: str
    title: str
    authors: list
    journal: str
    pissue: list
    link: str
    pdf: str
    abstract: str