export const uploadVideo = async (req, res) => {
    try {
        res.send('Video subido exitosamente')
    } catch (error) {
        res.status(500).json({message : 'Error al subir'})
    }
  }