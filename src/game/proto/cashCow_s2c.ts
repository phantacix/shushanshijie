// Generated by sprotodump. DO NOT EDIT!

namespace Sproto { 
	export class sc_cashCow_info_request {
		public level: number; // tag 0
		public exp: number; // tag 1
		public odds: number; // tag 2
		public shake: number; // tag 3
		public drawBin: number[]; // tag 4
		public amplitude: number; // tag 5
	}

	function _decode_sc_cashCow_info_request(d: SprotoTypeDeserialize) {
		let o = new sc_cashCow_info_request;
		let t = -1;
		while (-1 != (t = d.rt())) {
			switch (t) {
			case 0:
				o.level = d.ri ();
				break;
			case 1:
				o.exp = d.ri ();
				break;
			case 2:
				o.odds = d.ri ();
				break;
			case 3:
				o.shake = d.ri ();
				break;
			case 4:
				o.drawBin = d.ria ();
				break;
			case 5:
				o.amplitude = d.ri ();
				break;
			default:
				d.nod ();
				break;
			}
		}
		return o
	}

	function _encode_sc_cashCow_info_request(self: sc_cashCow_info_request, st: Sproto.SprotoStream) {
		let se = SprotoCore.GetSerialize(st, 6);

		if (self.level != undefined) {
			se.wi (self.level, 0);
		}

		if (self.exp != undefined) {
			se.wi (self.exp, 1);
		}

		if (self.odds != undefined) {
			se.wi (self.odds, 2);
		}

		if (self.shake != undefined) {
			se.wi (self.shake, 3);
		}

		if (self.drawBin != undefined) {
			se.wia (self.drawBin, 4);
		}

		if (self.amplitude != undefined) {
			se.wi (self.amplitude, 5);
		}

		return SprotoCore.CloseSerialize(se);
	}

	ALL_DICT["sc_cashCow_info_request"] = {en: _encode_sc_cashCow_info_request, de: _decode_sc_cashCow_info_request}
}

