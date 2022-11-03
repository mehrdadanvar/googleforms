from fastapi import APIRouter
from models.publications import PublicationModel
from config.db import db
from schemas.publications import publicationEntity, publicationsEntity

publications = APIRouter()


@publications.get("/")
async def find_all_publications():
    print(publicationsEntity(db.pubs.find()))
    return publicationsEntity(db.pubs.find())
