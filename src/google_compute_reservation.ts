import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeReservationArgsShareSettingsProjectMap {
  id: string;
  project_id?: string;
}

export interface GoogleComputeReservationArgsShareSettings {
  project_map?: GoogleComputeReservationArgsShareSettingsProjectMap[];
}

export interface GoogleComputeReservationArgsSpecificReservationInstancePropertiesGuestAccelerators {
  accelerator_count: number;
  accelerator_type: string;
}

export interface GoogleComputeReservationArgsSpecificReservationInstancePropertiesLocalSsds {
  disk_size_gb: number;
  interface?: string;
}

export interface GoogleComputeReservationArgsSpecificReservationInstanceProperties {
  machine_type: string;
  guest_accelerators?: GoogleComputeReservationArgsSpecificReservationInstancePropertiesGuestAccelerators[];
  local_ssds?: GoogleComputeReservationArgsSpecificReservationInstancePropertiesLocalSsds[];
}

export interface GoogleComputeReservationArgsSpecificReservation {
  count: number;
  instance_properties: GoogleComputeReservationArgsSpecificReservationInstanceProperties;
}

export interface GoogleComputeReservationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeReservationArgs {
  description?: string;
  name: string;
  specific_reservation_required?: boolean;
  zone: string;
  share_settings?: GoogleComputeReservationArgsShareSettings;
  specific_reservation: GoogleComputeReservationArgsSpecificReservation;
  timeouts?: GoogleComputeReservationArgsTimeouts;
}

export class google_compute_reservation extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleComputeReservationArgs) {
    const meta = {share_settings:{isBlock:true,project_map:{isBlock:true}},specific_reservation:{isBlock:true,instance_properties:{isBlock:true,guest_accelerators:{isBlock:true},local_ssds:{isBlock:true}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_reservation", resourceName);
  }

  get commitment(): string {
    return `${this.resourceType}.${this.resourceName}.commitment`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
