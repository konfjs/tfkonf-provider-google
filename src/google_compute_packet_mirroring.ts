import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputePacketMirroringArgsCollectorIlb {
  url: string;
}

export interface GoogleComputePacketMirroringArgsFilter {
  cidr_ranges?: string[];
  direction?: string;
  ip_protocols?: string[];
}

export interface GoogleComputePacketMirroringArgsMirroredResourcesInstances {
  url: string;
}

export interface GoogleComputePacketMirroringArgsMirroredResourcesSubnetworks {
  url: string;
}

export interface GoogleComputePacketMirroringArgsMirroredResources {
  tags?: string[];
  instances?: GoogleComputePacketMirroringArgsMirroredResourcesInstances[];
  subnetworks?: GoogleComputePacketMirroringArgsMirroredResourcesSubnetworks[];
}

export interface GoogleComputePacketMirroringArgsNetwork {
  url: string;
}

export interface GoogleComputePacketMirroringArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputePacketMirroringArgs {
  description?: string;
  name: string;
  collector_ilb: GoogleComputePacketMirroringArgsCollectorIlb;
  filter?: GoogleComputePacketMirroringArgsFilter;
  mirrored_resources: GoogleComputePacketMirroringArgsMirroredResources;
  network: GoogleComputePacketMirroringArgsNetwork;
  timeouts?: GoogleComputePacketMirroringArgsTimeouts;
}

export class google_compute_packet_mirroring extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputePacketMirroringArgs) {
    const meta = {collector_ilb:{isBlock:true},filter:{isBlock:true},mirrored_resources:{isBlock:true,instances:{isBlock:true},subnetworks:{isBlock:true}},network:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_packet_mirroring", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }
}
