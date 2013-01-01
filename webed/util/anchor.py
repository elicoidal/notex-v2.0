__author__ = 'hsk81'

###############################################################################
###############################################################################

from ..ext.cache import cache

###############################################################################
###############################################################################

class Anchor (object):

    def __init__ (self, session):

        self.sid = session['_id']

    ###########################################################################

    def get_version_key (self):
        return cache.make_key ('version', 'anchor', '*')

    def get_version (self):
        key = self.get_version_key ()
        return cache.get (key) or 0, key

    ###########################################################################

    def get_value_key (self):
        version, _ = self.get_version ()
        return cache.make_key (version, 'anchor', self.sid), version

    def get_value (self):
        key, _ = self.get_value_key ()
        return cache.get (key), key

    def set_value (self, value, timeout=None):
        key, _ = self.get_value_key ()
        cache.set (key, value, timeout=timeout)

    ###########################################################################

    def reset (self):
        version, key = self.get_version ()
        cache.set (key, version+1, timeout=0) ## indefinite

    def refresh (self):
        value, key = self.get_value ()
        if value: cache.delete (key)

     ## if value: ## TODO: Queue delete task!
     ##     base = Q (Node.query).one_or_default (uuid=value)
     ##     if base:
     ##         db.session.delete (base)
     ##         db.session.commit ()

    ###########################################################################

    @property
    def key (self):
        key, _ = self.get_value_key ()
        return key

    @property
    def value (self):
        value, _ = self.get_value ()
        return value

    @property
    def version (self):
        version, _ = self.get_version ()
        return version

    ###########################################################################

    @property
    def initiated (self):
        return self.value is not None

###############################################################################
###############################################################################