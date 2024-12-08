import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeVpnTunnelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeVpnTunnelArgs {
  description?: string;
  ike_version?: number;
  labels?: { [key: string]: string };
  name: string;
  peer_external_gateway?: string;
  peer_external_gateway_interface?: number;
  peer_gcp_gateway?: string;
  router?: string;
  shared_secret: string;
  target_vpn_gateway?: string;
  vpn_gateway?: string;
  vpn_gateway_interface?: number;
  timeouts?: GoogleComputeVpnTunnelArgsTimeouts;
}

export class google_compute_vpn_tunnel extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeVpnTunnelArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_vpn_tunnel", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get detailed_status(): string {
    return `${this.resourceType}.${this.resourceName}.detailed_status`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get local_traffic_selector(): string {
    return `${this.resourceType}.${this.resourceName}.local_traffic_selector`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get peer_ip(): string {
    return `${this.resourceType}.${this.resourceName}.peer_ip`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get remote_traffic_selector(): string {
    return `${this.resourceType}.${this.resourceName}.remote_traffic_selector`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get shared_secret(): string {
    return `${this.resourceType}.${this.resourceName}.shared_secret`;
  }

  get shared_secret_hash(): string {
    return `${this.resourceType}.${this.resourceName}.shared_secret_hash`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get tunnel_id(): string {
    return `${this.resourceType}.${this.resourceName}.tunnel_id`;
  }
}
