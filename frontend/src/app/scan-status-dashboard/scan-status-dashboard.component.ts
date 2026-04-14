/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, OnInit, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { MatCardModule } from '@angular/material/card'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

interface ScanStatus {
  totalVulnerabilities: number
  high: number
  medium: number
  low: number
}

@Component({
  selector: 'app-scan-status-dashboard',
  templateUrl: './scan-status-dashboard.component.html',
  styleUrls: ['./scan-status-dashboard.component.scss'],
  imports: [MatCardModule, MatProgressSpinnerModule]
})
export class ScanStatusDashboardComponent implements OnInit {
  private readonly http = inject(HttpClient)

  public scanStatus: ScanStatus | null = null
  public loading = true
  public error = ''

  ngOnInit () {
    this.http.get<ScanStatus>('/api/scan-status').subscribe({
      next: (result) => {
        this.scanStatus = result
        this.loading = false
      },
      error: () => {
        this.error = 'Unable to load vulnerability scan status.'
        this.loading = false
      }
    })
  }
}
